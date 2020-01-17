import { createSelector } from 'reselect'
import {getTransformedListingData} from "../../commons/utils";

const listingData = state => state.listingDuck && state.listingDuck.listingData && state.listingDuck.listingData

export const getListingData = createSelector(listingData, (listingData) => getTransformedListingData(listingData))