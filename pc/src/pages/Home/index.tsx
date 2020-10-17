import React from 'react';
import { connect } from 'react-redux';
import { changeName } from './store/actionCreators'


function mapStateToProps(state:any) {
  return {
    name: state.Home.testname
  };
}

function mapDispatchToProps(dispatch:any) {
  return {
    handleClick() {
      dispatch(changeName('haahha'))
    }
  };
}

interface IProps {
  name: string,
  handleClick: () => void
}

function Home ({ name, handleClick } : IProps) {
  
  return (
    <>
      Home:
      { name }
      <button onClick={handleClick}>M</button>
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);