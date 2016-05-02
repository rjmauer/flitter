json.array!(@events) do |event|
  json.extract! event, :id, :title, :date, :time, :location, :description
  json.url event_url(event, format: :json)
end
