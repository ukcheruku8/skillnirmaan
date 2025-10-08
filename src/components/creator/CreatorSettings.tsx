import React, { useState } from 'react';
import {
  User,
  Mail,
  Globe,
  CreditCard,
  Bell,
  Lock,
  Upload,
  Save,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';

const CreatorSettings = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'account' | 'payment' | 'notifications' | 'security'>('profile');
  const [profileData, setProfileData] = useState({
    displayName: 'Amit Kumar',
    bio: 'Passionate educator helping students master web development and design.',
    email: 'amit.kumar@email.com',
    phone: '+91 98765 43210',
    website: 'https://amitkumar.dev',
    profileImage: '',
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
      youtube: '',
      linkedin: ''
    }
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNewEnrollment: true,
    emailCourseCompleted: true,
    emailNewReview: true,
    emailWeeklyReport: false,
    pushNewEnrollment: true,
    pushNewMessage: true,
    pushNewReview: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: Mail },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock }
  ];

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (platform: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      social: { ...prev.social, [platform]: value }
    }));
  };

  const handleNotificationChange = (setting: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white text-3xl font-bold">
                        {profileData.displayName.charAt(0)}
                      </div>
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        <Upload className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{profileData.displayName}</h3>
                      <p className="text-sm text-gray-600">Creator since September 2024</p>
                      <button className="mt-2 text-sm text-orange-600 hover:text-orange-700 font-medium">
                        Change Photo
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Display Name *
                      </label>
                      <input
                        type="text"
                        value={profileData.displayName}
                        onChange={(e) => handleProfileChange('displayName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleProfileChange('bio', e.target.value)}
                      rows={4}
                      placeholder="Tell your students about yourself..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      {profileData.bio.length}/500 characters
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="url"
                          value={profileData.website}
                          onChange={(e) => handleProfileChange('website', e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
                    <div className="space-y-4">
                      {[
                        { platform: 'facebook', icon: Facebook, label: 'Facebook' },
                        { platform: 'twitter', icon: Twitter, label: 'Twitter' },
                        { platform: 'instagram', icon: Instagram, label: 'Instagram' },
                        { platform: 'youtube', icon: Youtube, label: 'YouTube' },
                        { platform: 'linkedin', icon: Linkedin, label: 'LinkedIn' }
                      ].map(({ platform, icon: Icon, label }) => (
                        <div key={platform}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {label}
                          </label>
                          <div className="relative">
                            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="url"
                              value={profileData.social[platform as keyof typeof profileData.social]}
                              onChange={(e) => handleSocialChange(platform, e.target.value)}
                              placeholder={`https://${platform}.com/yourprofile`}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                    <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all flex items-center space-x-2">
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'account' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Email
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        disabled
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        This is your primary account email. Contact support to change it.
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-green-900">Your account is active</p>
                            <p className="text-sm text-green-700">All features are available</p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-red-600">Danger Zone</h3>
                      <div className="border border-red-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Delete Account</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Permanently delete your account and all associated data. This action cannot be undone.
                            </p>
                          </div>
                          <button className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium whitespace-nowrap">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'payment' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Settings</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payout Method</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border-2 border-orange-500 bg-orange-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">Bank Transfer</span>
                            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">
                              Active
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">HDFC Bank ****4567</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 cursor-pointer">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">UPI</span>
                          </div>
                          <p className="text-sm text-gray-600">Not configured</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Details</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Account Holder Name
                            </label>
                            <input
                              type="text"
                              placeholder="Full name as per bank"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Bank Name
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., HDFC Bank"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Account Number
                            </label>
                            <input
                              type="text"
                              placeholder="Account number"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              IFSC Code
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., HDFC0001234"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Information</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              PAN Number
                            </label>
                            <input
                              type="text"
                              placeholder="ABCDE1234F"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              GST Number (Optional)
                            </label>
                            <input
                              type="text"
                              placeholder="22AAAAA0000A1Z5"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                      <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                        Cancel
                      </button>
                      <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all flex items-center space-x-2">
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'emailNewEnrollment', label: 'New student enrollment', description: 'Get notified when a student enrolls in your course' },
                          { key: 'emailCourseCompleted', label: 'Course completion', description: 'Get notified when a student completes your course' },
                          { key: 'emailNewReview', label: 'New course reviews', description: 'Get notified when someone reviews your course' },
                          { key: 'emailWeeklyReport', label: 'Weekly performance report', description: 'Receive weekly summary of your course performance' }
                        ].map((setting) => (
                          <div key={setting.key} className="flex items-start justify-between py-4 border-b border-gray-200">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{setting.label}</p>
                              <p className="text-sm text-gray-600">{setting.description}</p>
                            </div>
                            <button
                              onClick={() => handleNotificationChange(setting.key)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                notificationSettings[setting.key as keyof typeof notificationSettings]
                                  ? 'bg-orange-600'
                                  : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  notificationSettings[setting.key as keyof typeof notificationSettings]
                                    ? 'translate-x-6'
                                    : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'pushNewEnrollment', label: 'New enrollments', description: 'Push notifications for new enrollments' },
                          { key: 'pushNewMessage', label: 'New messages', description: 'Push notifications for new student messages' },
                          { key: 'pushNewReview', label: 'New reviews', description: 'Push notifications for course reviews' }
                        ].map((setting) => (
                          <div key={setting.key} className="flex items-start justify-between py-4 border-b border-gray-200">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{setting.label}</p>
                              <p className="text-sm text-gray-600">{setting.description}</p>
                            </div>
                            <button
                              onClick={() => handleNotificationChange(setting.key)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                notificationSettings[setting.key as keyof typeof notificationSettings]
                                  ? 'bg-orange-600'
                                  : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  notificationSettings[setting.key as keyof typeof notificationSettings]
                                    ? 'translate-x-6'
                                    : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <button className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Enable 2FA</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <button className="ml-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium whitespace-nowrap">
                            Enable 2FA
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Chrome on Windows</p>
                            <p className="text-sm text-gray-600">Current session • Mumbai, India</p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Mobile App on iOS</p>
                            <p className="text-sm text-gray-600">2 days ago • Mumbai, India</p>
                          </div>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Revoke
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorSettings;
