class PagesController < ApplicationController
  def home
  end

  def about
  end

  def feedback
    @comment = Comment.new
  end
end
