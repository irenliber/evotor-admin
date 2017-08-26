import React, {Component} from 'react'
import { fetchStores } from './../api'

export default class StoresIndexComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stores: [],
      isLoading: false
    }
  }

  componentWillMount() {
    this.stores()
  }

  setLoading = () => {
    this.setState({
      isLoading: true
    })
  }

  setStores = (stores) => {
    this.setState({
      stores: stores,
      isLoading: false
    })
  }

  stores = () => {
    fetchStores(
      this.setLoading,
      this.setStores
    )
  }


  render() {
    return (
      <div className="container">
        <table className="pt-table .pt-striped">
          <thead>
            <tr>
              <th>№</th>
              <th>Название</th>
              <th>Адрес</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stores.map(( (store, index) => {
              return(
                <tr>
                  <td>{store.index}</td>
                  <td>{store.name}</td>
                  <td>{store.address}</td>
                </tr>
              )
            }))}
          </tbody>
        </table>

      </div>
    )
  }
}
