import axios from "axios";

import {
    PRODUCTS_LIST_QUERY,
    PRODUCTS_LIST_QUERY_SUCESS,
    PRODUCT_LIST_QUERY_FAIL

}from "../../constants/productsConstants";


//setup 
import {listOfProducts, correctListOffProducts , actionTypes} from  "../productActions";
import * as actionCreator from  "../productActions";



describe('correctListOffProducts' , () => {
     test('returns an action  with type  PRODUCTS_LIST_QUERY_SUCESS', () => {
             const action = correctListOffProducts();
             expect(action).toStrictEqual({type:  actionTypes.CORRECT_LIST_PRODUCT_DATA})


     })           
});


it('returns list off products', function() {
      let action = actionCreator.listOfProducts();
     
    //  expect(action[axios].to.deep.equal({
    //    method: 'get',
    //    url: 'http://localhost:5000/api/products',
    //    type: ActionType.PRODUCTS_LIST_QUERY_SUCESS
    //  }));



});


