class Comment < ActiveRecord::Base
  belongs_to :user

  def username
    User.find(self.user_id).name
  end
end
