
const Card = (props) => {
  return (
    <div className={`bg-white p-5 border border-gray-300 rounded-md ${props.className}`}>{props.children}</div>
  )
}

export default Card