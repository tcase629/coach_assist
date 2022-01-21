class League < ApplicationRecord
  has_many :teams, dependent: :destroy
  has_one :schedule, dependent: :destroy
end
