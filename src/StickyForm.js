import React from 'react'
import { connect, } from 'react-redux'
import { Container, } from 'semantic-ui-react'

class StickyForm extends React.Component {

    state = {name: '', }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch, id, } = this.props
        const {name, } = this.state
        const note = {name, id,}
        dispatch({ type: 'ADD_A_NOTE', note, })
        dispatch({ type: 'INC_ID', })
        this.setState({ name:'', })
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value, })
    }

    render() {
        const {name, } = this.state
        return (
            <Container>
                <div>
                    <h2>Create a Note</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input value={name} onChange={this.handleChange} />
                    </form>
                </div>
                <br />
                <br />
            </Container>
        )
    }
}

const mapStateToProps= (state) => {
    return { id: state.nextId, }
}

export default connect(mapStateToProps)(StickyForm)