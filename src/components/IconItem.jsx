function IconItem({ icon }) {
  return (
    <div className="icon-item pb-10">
      <div className="icon-mui pb-10">{icon.icon}</div>
      <h4 className="pb-10">{icon.title}</h4>
      <p className="icon-text">{icon.text}</p>
    </div>
  )
}

export default IconItem
