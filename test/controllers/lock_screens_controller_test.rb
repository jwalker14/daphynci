require 'test_helper'

class LockScreensControllerTest < ActionController::TestCase
  setup do
    @lock_screen = lock_screens(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:lock_screens)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create lock_screen" do
    assert_difference('LockScreen.count') do
      post :create, lock_screen: {  }
    end

    assert_redirected_to lock_screen_path(assigns(:lock_screen))
  end

  test "should show lock_screen" do
    get :show, id: @lock_screen
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @lock_screen
    assert_response :success
  end

  test "should update lock_screen" do
    patch :update, id: @lock_screen, lock_screen: {  }
    assert_redirected_to lock_screen_path(assigns(:lock_screen))
  end

  test "should destroy lock_screen" do
    assert_difference('LockScreen.count', -1) do
      delete :destroy, id: @lock_screen
    end

    assert_redirected_to lock_screens_path
  end
end
