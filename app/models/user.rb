class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable

  attr_accessor :login
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(email) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      if conditions[:email].nil?
        where(conditions).first
      else
        where(email: conditions[:email]).first
      end
    end
  end
  def to_param
    email
  end
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.firstname = auth.info.name.split()[0]   # if there is a name
      user.lastname = auth.info.name.split()[1]
      user.user_image = auth.info.image # if there is an image
      user.save!
    end
  end
end
