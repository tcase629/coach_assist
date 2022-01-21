class Schedule < ApplicationRecord
  belongs_to :league
  has_many :games, dependent: :destroy
end
