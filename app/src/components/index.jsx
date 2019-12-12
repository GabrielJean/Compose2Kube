import React from "react"

export const Index = () => {
  return (
    <div className="col">
      <p>
        This website sole purpose is to convert docker compose files into kubernetes
        items.
        <br />
        You can convert your files in three steps:
      </p>
      <ol>
        <li>Click on the "Choose File" button.</li>
        <li>Select your docker-compose.yml file.</li>
        <li>Press submit to get your compose to kubernetes file.</li>
      </ol>
    </div>
  )
}
