import Container from 'react-bootstrap/esm/Container'; 
import Notes from '../Notes/Notes';


function Home() {

  return (
    <>
      <Container>
        <div className="home">
          <Notes />

        </div>
      </Container>
    </>
  )
}

export default Home