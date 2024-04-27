
export const ColorfulMessage = (props) => {
  
  const fontStyle = {
    color :props.color,
    fontSize : "20px"
  }
  return (
    <p style={fontStyle}>{props.children}</p>
  )
}
