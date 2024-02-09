import { useController } from 'react-hook-form'

import Textarea from './Textarea'

const ControlledTextarea = ({ name, control, defaultValue = '', ...props }) => {
  const { 
    field: { value, onChenge }
  } = useController({ name, control, defaultValue })
  return (
    <Textarea {...props} value={value} onchenge={onChenge} />
  )
}

export default ControlledTextarea