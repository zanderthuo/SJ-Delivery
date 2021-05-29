import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';

import ReactApexChart from 'react-apexcharts'

class OrderAnalytics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60, 20, 20],
        options : {
            labels: ["In Transit", "Collected", "Delayed"],
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%'
                    }
                }
            },
            dataLabels: {
                enabled: true
            },
            legend: {
                show: true,
                position: 'bottom',
            },
            colors: ['#13CAE6', '#74DDED', '#ADECF2'],

        }
      }
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <div className="float-right">
                <select className="custom-select custom-select-sm">
                    <option defaultValue>Apr</option>
                    <option value="1">Mar</option>
                    <option value="2">Feb</option>
                    <option value="3">Jan</option>
                </select>
            </div>
            <h4 className="card-title mb-4">Order Analytics</h4>
            <div>
              <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={500} height={320} />
            </div>
            {/*<Row>
                <Col xs={4}>
                    <div className="text-center mt-4">
                        <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary font-size-10 mr-1"></i> In Transit</p>
                        <h5>42 %</h5>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="text-center mt-4">
                      <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-success font-size-10 mr-1"></i> Collected</p>
                        <h5>26 %</h5>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="text-center mt-4">
                        <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-warning font-size-10 mr-1"></i> Delayed</p>
                        <h5>42 %</h5>
                    </div>
                </Col>
            </Row>*/}
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default OrderAnalytics
