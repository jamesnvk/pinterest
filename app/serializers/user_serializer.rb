class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :pins
  has_many :comments
end
