import React, {Component} from 'react';
import Category from '../../components/Category/Category';

class Categories extends Component {
  render() {
    const {categories} = this.props;

    return (
      <div>
        {
          categories.map((category, index) =>
            <Category
              key={`category-${index}`}
              title={category.name}
              category={category.api_code}/>
          )
        }
      </div>
    );
  }
}

export default Categories;
