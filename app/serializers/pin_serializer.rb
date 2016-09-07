class PinSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :image_file_name, :image_content_type, :image_file_size, :image_updated_at
  has_one :user
end
