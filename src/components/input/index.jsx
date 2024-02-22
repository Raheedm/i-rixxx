import { useEffect, useRef } from 'react'
import InputImg from '../../assets/SVGs/input.svg'
import InputBigImg from '../../assets/SVGs/input_big.svg'
import InputRedImg from '../../assets/SVGs/input_red.svg'
import './input.css'

const Input = (props) => {
  const {
    width = '400px',
    size = 'small',
    label,
    placeholder,
    name,
    value,
    onChange,
    type,
    disabled = false,
    required = true,
    variant,
    pattern = '*',
    title = '',
  } = props

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const w = ref.current.parentElement.offsetWidth
      ref.current.style.height = `${(size === 'big' ? 0.529 : 0.214) * w}px`
    }
  }, [size])

  return (
    <div style={{ width, height: '40%' }}>
      <p
        style={{
          color: 'white',
          margin: 0,
          fontFamily: "'Blanka', sans-serif",
          fontWeight: 400,
          fontSize: '1.5625rem',
          paddingLeft: '7px',
          lineHeight: '2rem',
          letterSpacing: '0.1em',
          textShadow: '-1px 1px 5px #0DB3B3, 1px 1px 5px #0DB3B3',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>
      <div
        ref={ref}
        style={{
          position: 'relative',
          width,
        }}
      >
        <img
          src={size === 'big' ? InputBigImg : variant === 'red' ? InputRedImg : InputImg}
          alt=""
          style={{
            width: '95%',
            height: '95%',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
          }}
        />
        {size === 'big' && (
          <textarea
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
            onChange={(e) => onChange(e)}
            style={{
              width: '86%',
              left: '4%',
              height: '68%',
              top: '15%',
              resize: 'none',
              position: 'relative',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1.5625rem',
              color: 'white',
              paddingLeft: '10px',
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 500,
            }}
            required={required}
            disabled={disabled}
          >
            asdf
          </textarea>
        )}

        {size === 'small' && (
          <input
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
            onChange={(e) => onChange(e)}
            style={{
              width: '85%',
              left: '5%',
              height: '30%',
              top: '33%',
              position: 'relative',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1.5625rem',
              color: 'white',
              paddingLeft: '10px',
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 500,
            }}
            required={required}
            disabled={disabled}
            pattern={pattern}
            title={title}
          />
        )}
      </div>
    </div>
  )
}

export default Input
