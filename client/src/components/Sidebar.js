import React from 'react'
import { Tab, Nav} from 'react-bootstrap'

export default function Sidebar({id}) {
    return (
        <div style={{ width : '250px'}} className="d-flex flex-column">
          <Tab.Container>
            <Nav>
                <Nav.Item>
                    <Nav.link>

                    </Nav.link>
                </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
    )
}
