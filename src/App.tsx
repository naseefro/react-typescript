import './App.css';
import Header from './components/Header';
import { Container } from 'reactstrap';
import Films from './components/Films';
import { ReactElement, ReactNode } from 'react';

interface Person {
  name: string,
  movie: string,
}


const Hoc = ({ children }: { children: ReactNode }): ReactElement => {
  return (<div>{children}</div>)
}
const App = () => {
  const greetings = (name: string) => {
    console.log("Greetings " + name)
  }
  const person: Person = {
    name: "tobi",
    movie: "Naruto"
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Greetings ", e?.target.value)

  }
  return (
    <>
      <Header />
      <div className="App">
        <Container className="m-2 text-center">
          <Hoc>
            <Films
              obj={person}
              fun={() => greetings("Mr tobi")}
              handleChange={handleChange}
            />
          </Hoc>
        </Container>
      </div>
    </>
  );
}

export default App;
