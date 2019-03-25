import React from 'react'
import { connect, } from 'react-redux'
import { Card, } from 'semantic-ui-react';

const StickyNote = ({ notes }) => {
    return (
        <div>
            <Card>
                {notes.map( t => {
                    return (
                        <Card.Content key={t.id}>
                            {t.name}
                            <Card.Description>
                             {/* <Input value={text} onChange={this.handleChange}></Input> */}
                            </Card.Description>
                        </Card.Content>
                    )
                    })
                }
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { notes: state.notes, }
}

export default connect(mapStateToProps)(StickyNote)