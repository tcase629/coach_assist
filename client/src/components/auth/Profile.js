import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Row, Col, Image, Container, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const styles = {
  dropzone: {
    height: "200px",
    width: "200px",
    border: "1px dashed black",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormValue] = useState({ name: '', email: '', image: null })

  useEffect( () => {
    const { name, email, image } = user
    setFormValue({ name, email, image })
  }, [])

  const onDrop = (files) => {
    setFormValue({ ...formVals, file: files[0] })
  }

  const profileView = () => {
    return (
      <>
        <Col md="4">
          <Image src={formVals.image || defaultImage} />
        </Col>
        <Col md="8">
          <h1>{formVals.name}</h1>
          <h1>{formVals.email}</h1>
        </Col>
      </>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formVals)
    setEditing(false)
    setFormValue({ ...formVals, image: null })
  }

  const editView = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Col md="4">
          <Dropzone
            onDrop={onDrop}
            multiple={false}
          >  
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </Col>
        <Col md="8">
          <Form.Group>
          <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={formVals.name}
              onChange={(e) => setFormValue({...formVals, name: e.target.value})}
              type="text"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={formVals.email}
              onChange={(e) => setFormValue({...formVals, email: e.target.value})}
              type="email"
              required
            />
          </Form.Group>
          <Button type="submit">Update</Button>
        </Col>
      </Form>
    )
  }

  return (
    <Container>
      <hr />
      <Row>
        { editing ? editView() : profileView()}
        <Col>
          <Button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</Button>
        </Col>
      </Row>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => <Profile { ...props } { ...auth } /> }
  </AuthConsumer>
)

export default ConnectedProfile;