export const ScrollUp = () => {
  const clicked = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  
  return (
    <div>
      <i className="fa-solid fa-circle-arrow-up scroll-icon" onClick={clicked}></i>
    </div>
  )
}
