import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../App/store.tsx';
import { Property } from '../../../common/models/Property.tsx';

interface PropertySearch {
  properties: Property[];
  searchType: string;
  mlsStatus: string;
  minPrice: string;
  maxPrice: string;
  homeType: string[];
  minBeds: string;
  maxBeds: string;
  minBaths: string;
  maxBaths: string;
  previousSearchType: string;
  previousMlsStatus: string;
  previousMinPrice: string;
  previousMaxPrice: string;
  previousHomeType: string[];
  previousMinBeds: string;
  previousMaxBeds: string;
  previousMinBaths: string;
  previousMaxBaths: string;
  status: string;
  error: string | null;
  searchResults: never[];
  selectedProperty: Property;
  isModalOpen: boolean;
}

const initialState: PropertySearch = {
  previousHomeType: [],
  previousMaxBaths: '',
  previousMaxBeds: '',
  previousMaxPrice: '',
  previousMinBaths: '',
  previousMinBeds: '',
  previousMinPrice: '',
  previousMlsStatus: 'Active',
  previousSearchType: 'For Sale',
  homeType: [],
  maxBaths: '',
  maxBeds: '',
  maxPrice: '',
  minBaths: '',
  minBeds: '',
  minPrice: '',
  properties: [],
  searchType: 'For Sale',
  mlsStatus: 'Active',
  status: 'idle',
  error: null,
  searchResults: [],
  selectedProperty: {
    BedroomsTotal: 0,
    OnMarketDate: '',
    Flooring: [],
    PhotosCount: 0,
    FireplacesTotal: 0,
    Cooling: [],
    GarageYN: false,
    ExteriorFeatures: [],
    Longitude: 0,
    PublicRemarks: '',
    RoomBathroomFeatures: [],
    RoomDiningRoomFeatures: [],
    Appliances: [],
    TaxAnnualAmount: 0,
    ListOfficeName: '',
    Basement: [],
    Latitude: 0,
    PropertyType: '',
    BathroomsTotalDecimal: 0,
    ListPrice: 0,
    MlsStatus: '',
    RoomMasterBedroomFeatures: [],
    Gas: [],
    FireplaceYN: false,
    AttachedGarageYN: false,
    StandardStatus: '',
    Roof: [],
    Stories: 0,
    Levels: [],
    InteriorFeatures: [],
    BathroomsFull: 0,
    LotSizeAcres: 0,
    SubdivisionName: '',
    Fencing: [],
    WaterSource: [],
    LotSizeDimensions: '',
    StoriesTotal: 0,
    YearBuilt: 0,
    RoomKitchenFeatures: [],
    OtherStructures: [],
    LivingArea: 0,
    LivingAreaUnits: '',
    ParkingFeatures: [],
    BathroomsHalf: 0,
    LotSizeArea: 0,
    Sewer: [],
    Heating: [],
    PatioAndPorchFeatures: [],
    Utilities: [],
    FireplaceFeatures: [],
    WindowFeatures: [],
    CommunityFeatures: [],
    RoomsTotal: 0,
    GarageSpaces: 0,
    Media: [],
    City: '',
    TaxYear: 0,
    Ownership: '',
    LotFeatures: [],
    PostalCode: '',
    LotSizeSquareFeet: 0,
    SrchitecturalStyle: [],
    UnparsedAddress: '',
    BuildingAreaTotal: 0,
    ListingId: '',
    PropertySubType: '',
    DaysOnMarket: 0,
    AssociationFee: 0,
  },
  isModalOpen: false,
};

const propertySubTypeMapping: Map<string, string> = new Map([
  ['Houses', 'Single Family Residence'],
  ['Townhomes', 'Townhouse,Condo/TH'],
  ['Multi-Family', 'Town'],
  ['Condos/Co-ops', 'Condo/TH'],
  ['Apartments', '2 Family'],
]);

export const fetchProperties = createAsyncThunk('get/fetchProperties', async (_, { getState }) => {
  const { propertySearch, propertySearchBar } = getState() as RootState;
  const response = await fetch(
    `https://hhk7xb1yja.execute-api.us-east-1.amazonaws.com/Prod/properties?city=${propertySearchBar.selectedSearchResult ? propertySearchBar.selectedSearchResult.value : 'Iselin'}&propertyType=${propertySearch.searchType === 'For Sale' ? 'Residential' : 'Residential Lease'}&mlsStatus=${propertySearch.mlsStatus === '' ? 'Active' : propertySearch.mlsStatus}${propertySearch.minBeds !== '' ? `&minBeds=${propertySearch.minBeds}` : ''}${propertySearch.maxBeds !== '' ? `&maxBeds=${propertySearch.maxBeds}` : ''}${propertySearch.minPrice !== '' ? `&minPrice=${propertySearch.minPrice.replace(/,/gi, '')}` : ''}${propertySearch.maxPrice !== '' ? `&maxPrice=${propertySearch.maxPrice.replace(/,/gi, '')}` : ''}${propertySearch.homeType.length > 0 ? `&propertySubType=${propertySearch.homeType.map((type) => propertySubTypeMapping.get(type)).join(',')}` : ''}`,
  );
  return await response.json();
});

export const propertySearchSlice = createSlice({
  name: 'propertySearch',
  initialState,
  reducers: {
    setHomeType: (state, action: PayloadAction<{ checked: boolean; homeType: string }>) => {
      if (action.payload.checked) {
        state.homeType.push(action.payload.homeType);
      } else {
        state.homeType = state.homeType.filter((type) => type !== action.payload.homeType);
      }
    },
    setMLSStatus: (state, action: PayloadAction<{ checked: boolean; mlsStatus: string }>) => {
      if (action.payload.checked) {
        state.mlsStatus = action.payload.mlsStatus;
      } else {
        state.mlsStatus = '';
      }
    },
    setMinBaths: (state, action: PayloadAction<string>) => {
      if (action.payload == '' || action.payload == '-' || +action.payload == '0') {
        state.minBaths = '';
      } else if (+action.payload < 1) {
        state.minBaths = '1';
      } else if (+action.payload > 10) {
        state.minBaths = '10';
      } else {
        state.minBaths = action.payload as unknown as string;
      }
    },
    setMaxBaths: (state, action: PayloadAction<string>) => {
      if (action.payload == '' || action.payload == '-' || +action.payload == '0') {
        state.maxBaths = '';
      } else if (+action.payload < 1) {
        state.maxBaths = '1';
      } else if (+action.payload > 10) {
        state.maxBaths = '10';
      } else {
        state.maxBaths = action.payload as unknown as string;
      }
    },
    setMinBeds: (state, action: PayloadAction<string>) => {
      if (action.payload == '' || action.payload == '-' || +action.payload == '0') {
        state.minBeds = '';
      } else if (+action.payload < 1) {
        state.minBeds = '1';
      } else if (+action.payload > 10) {
        state.minBeds = '10';
      } else {
        state.minBeds = action.payload as unknown as string;
      }
    },
    setMaxBeds: (state, action: PayloadAction<string>) => {
      if (action.payload == '' || action.payload == '-' || +action.payload == '0') {
        state.maxBeds = '';
      } else if (+action.payload < 1) {
        state.maxBeds = '1';
      } else if (+action.payload > 10) {
        state.maxBeds = '10';
      } else {
        state.maxBeds = action.payload as unknown as string;
      }
    },
    setMinPrice: (state, action: PayloadAction<string>) => {
      const removeCommas = action.payload.replace(/,/gi, '');
      if (removeCommas == '' || removeCommas == '-' || +removeCommas == '0') {
        state.minPrice = '';
      } else if (+removeCommas > 2000000) {
        state.minPrice = '2,000,000';
      } else {
        state.minPrice = (+removeCommas).toLocaleString();
      }
    },
    setMaxPrice: (state, action: PayloadAction<string>) => {
      const removeCommas = action.payload.replace(/,/gi, '');
      if (removeCommas == '' || removeCommas == '-' || +removeCommas == '0') {
        state.maxPrice = '';
      } else if (+removeCommas > 2000000) {
        state.maxPrice = '2,000,000';
      } else {
        state.maxPrice = (+removeCommas).toLocaleString();
      }
    },
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload;
      state.mlsStatus = 'Active';
    },
    setSearchResults: (state, action: PayloadAction<never[]>) => {
      state.searchResults = action.payload;
    },
    setSelectProperty: (state, action: PayloadAction<string>) => {
      state.selectedProperty = state.properties.filter((property) => property.ListingId === action.payload)[0];
      state.isModalOpen = true;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProperties.pending, (state, action) => {
        state.status = 'loading';
        state.properties = [];
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
        state.properties = [];
      });
  },
});

export const selectSearchType = (state: RootState) => state.propertySearch.searchType;
export const selectHomeType = (state: RootState) => state.propertySearch.homeType;

export const selectMLSStatus = (state: RootState) => state.propertySearch.mlsStatus;

export const selectMinBaths = (state: RootState) => state.propertySearch.minBaths;

export const selectMaxBaths = (state: RootState) => state.propertySearch.maxBaths;

export const selectMinBeds = (state: RootState) => state.propertySearch.minBeds;

export const selectMaxBeds = (state: RootState) => state.propertySearch.maxBeds;

export const selectMinPrice = (state: RootState) => state.propertySearch.minPrice;

export const selectMaxPrice = (state: RootState) => state.propertySearch.maxPrice;

export const selectProperties = (state: RootState) => state.propertySearch.properties;

export const selectSelectedProperty = (state: RootState) => state.propertySearch.selectedProperty;

export const selectIsModalOpen = (state: RootState) => state.propertySearch.isModalOpen;

export const selectPropertySearchStatus = (state: RootState) => state.propertySearch.status;

export const {
  setMinBeds,
  setMaxBeds,
  setMinBaths,
  setMaxBaths,
  setHomeType,
  setMinPrice,
  setMaxPrice,
  setSearchType,
  setMLSStatus,
  setSearchResults,
  setSelectProperty,
  setIsModalOpen,
} = propertySearchSlice.actions;

export default propertySearchSlice.reducer;
