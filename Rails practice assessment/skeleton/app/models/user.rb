class User < ApplicationRecord
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end
  
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token
  
  attr_reader :password

  has_many :links
  has_many :comments

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(input)
    @password = input
    self.password_digest = BCrypt::Password.create(input)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end