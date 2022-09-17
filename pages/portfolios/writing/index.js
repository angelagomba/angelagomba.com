import data from '../../../public/content/portfolios.json'

function Writing() {

  const contents = data.portfolios[3].content.map((item) => <Content content={item} />)

  return (
    <div>
      {contents}
    </div>
  )
}