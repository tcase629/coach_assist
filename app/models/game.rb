class Game < ApplicationRecord
  belongs_to :team
  belongs_to :schedule
end
