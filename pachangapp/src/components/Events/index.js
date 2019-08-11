import React, { Component } from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

import styles from "./index.module.css"



class Events extends Component{

    constructor(props) {
        super(props)

        this.state = {
            events:[]
        }
      }

      async componentDidMount(){
          const response = await fetch("http://localhost:8080/eventos")

          const {data  = {} } = await response.json()

          const { events } = data;

          this.setState({ events }) 
      }



    render () {
        return this.state.events.map( (event) => (
            <div className={styles.Events}>
            <Card style={{ width: '20rem' }}>
            <Card.Header>
                <div>title:{ event.name }</div>
                <div>location:{ event.location }</div>
                <div>when: { event.date }</div>
            </Card.Header>
            <ListGroup variant="flush">
                {
                    event.items.map((item) => (
                        <ListGroup.Item>
                            <div> product: {item.quantity}*{item.name} </div>
                            <div> carrier:{item.carrier} </div> 
                        </ListGroup.Item>
                    )
                    )
                }
            </ListGroup>
            </Card>
            </div>   
          )
        ) 
    }
}

export default Events