class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :terms, :boolean
    add_column :users, :provider, :string
    add_column :users, :uid, :string
  end
end
