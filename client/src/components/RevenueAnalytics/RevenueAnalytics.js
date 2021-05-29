import React, { Component } from 'react'
import { Card, CardBody } from 'reactstrap';

import ReactApexChart from 'react-apexcharts'

class RevenueAnalytics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        }
      },
      series: [{
        name: 'Total revenue',
        data: [3000, 4000, 3500, 5000, 4900, 6000, 7000, 9100, 1250, 1800, 1750, 2500]
      }]
    }
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Revenue Analytics</h4>
            <div>
              <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={450} height={250} />
            </div>
          </CardBody>
          <CardBody className="border-top text-center">
              {/*<Row>
                <Col sm={4}>
                      <div className="d-inline-flex">
                          <h5 className="mr-2">$12,253</h5>
                          <div className="text-success">
                              <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
                          </div>
                      </div>
                      <p className="text-muted text-truncate mb-0">This month</p>
                  </Col>

                  <Col sm={4}>
                      <div className="mt-4 mt-sm-0">
                          <p className="mb-2 text-muted text-truncate"><i className="mdi mdi-circle text-primary font-size-10 mr-1"></i> This Year :</p>
                          <div className="d-inline-flex">
                              <h5 className="mb-0 mr-2">$ 34,254</h5>
                              <div className="text-success">
                                  <i className="mdi mdi-menu-up font-size-14"> </i>2.1 %
                              </div>
                          </div>
                      </div>
                  </Col>
                  <Col sm={4}>
                      <div className="mt-4 mt-sm-0">
                          <p className="mb-2 text-muted text-truncate"><i className="mdi mdi-circle text-success font-size-10 mr-1"></i> Previous Year :</p>
                          <div className="d-inline-flex">
                              <h5 className="mb-0">$ 32,695</h5>
                          </div>
                      </div>
                  </Col>

              </Row>*/}
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default RevenueAnalytics
