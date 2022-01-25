class Schedule < ApplicationRecord
  belongs_to :league
  has_many :games, dependent: :destroy
  has_many :teams, through: :games
end
