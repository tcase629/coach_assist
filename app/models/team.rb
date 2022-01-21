class Team < ApplicationRecord
  belongs_to :user
  belongs_to :league
  has_many :players, dependent: :destroy
  has_many :games, through: :schedules
  has_one :league, dependent: :destroy
end
