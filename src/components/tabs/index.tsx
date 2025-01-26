import SingleTab from "./singleTab"

type Props = {
  data: { title: string, description: string }[]
}

const Tabs = (props: Props) => {
  return (
    <div className="py-16">
      {
        props.data.map((item, index) => <SingleTab data={item} key={index} />)
      }
    </div>
  )
}

export default Tabs