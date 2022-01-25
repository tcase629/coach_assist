class Team < ApplicationRecord
  belongs_to :user
  belongs_to :league
  has_many :games, dependent: :destroy
  has_many :players, dependent: :destroy
  has_one :schedule, through: :games
  has_one :league, dependent: :destroy
end
