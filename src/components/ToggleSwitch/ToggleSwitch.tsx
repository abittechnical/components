import React from 'react'
import { Switch } from '@headlessui/react'

export interface ToggleSwitchProps {
  enabled: boolean
  onChange: (value: Boolean) => void
}

const ToggleSwitch = ({ enabled, onChange }: ToggleSwitchProps) => (
  <Switch
    checked={enabled}
    onChange={onChange}
    className={`${enabled ? 'bg-green-500' : 'bg-gray-400'}
          relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white 
          focus-visible:ring-opacity-75`}
  >
    <span className="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
    />
  </Switch>
)
export default ToggleSwitch
