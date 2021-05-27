import { ReactNode, useRef, useState } from "react";
import { Col, Row } from "reactstrap";

interface Props {
  count?: number | 0;
  fun: () => void,
  obj: any,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextWithNumber = ({ children }: { children: (num: number) => ReactNode }) => {
  const [state, setState] = useState<number>(0);
  return (
    <Row className="justify-content-center">
      <Col lg="6">
        <p className="text-center"> {children(state)} Clicks</p>
        <button onClick={() => setState(state + 1)}>+</button>
        <button onClick={() => setState(state - 1)}>-</button>
      </Col>
    </Row>
  )
}

const ListComponent = ({ items, render }: { items: string[], render: (item: string) => ReactNode }) => {
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={`list-${index + 1}`}>
          {render(item)}
        </li>
      ))}
    </ul >
  )
}

const Films = (props: Props) => {
  const { handleChange } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <TextWithNumber>{(num: number) => <Row><Col>You got {num}</Col></Row>}</TextWithNumber>
      <Row className="justify-content-center mt-5">
        <Col lg="4">
          <input ref={inputRef} onChange={handleChange} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col lg="4">
          <ListComponent items={["asda", "asdasd"]} render={(item: string) => <div>{item}</div>} />
        </Col>
      </Row>
    </>
  )
}
export default Films;