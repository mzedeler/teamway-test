import React from 'react'
import Card from '../../../../components/Card'

const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default ({ onNext, questionIndex }) => (
  <Card>
    <div onClick={onNext}>
      <label className="text-base font-medium text-gray-900">Notifications</label>
      <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === 'email'}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  </Card>
)
