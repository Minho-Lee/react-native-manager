import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch, stopListening } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		// nextProps is the next set of props that this component will be rendered with
		// and 'this.props' is still the old set of props
		this.createDataSource(nextProps);
	}

	componentWillUnmount() {
		this.props.stopListening();
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}

	renderRow(employee) {
		return <ListItem employee={employee} />;
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	// We have to convert an object to an array, we will use lodash method 'map()'
	const employees = _.map(state.employees, (val, uid) => {
		// val has the 'name, shift, phone' property.
		return { ...val, uid };
	});
	return { employees };
};

export default connect(mapStateToProps, { employeesFetch, stopListening })(EmployeeList);
