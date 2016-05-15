json.array!(@lock_screens) do |lock_screen|
  json.extract! lock_screen, :id
  json.url lock_screen_url(lock_screen, format: :json)
end
