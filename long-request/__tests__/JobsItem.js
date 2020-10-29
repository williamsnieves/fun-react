import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import JobsItem from '../src/components/JobsItem'

test('renders learn react link', () => {
  const dummyProps = {
    title: "test title",
    type: "Full Time",
    company: "Test company",
    location: "New York",
    company_url: "https://e-bot7.com/de/",
    wishList: []
  }
  const { getAllByTestId, getByText } = render(<JobsItem {...dummyProps} />);
  const element = getAllByTestId('job-item')
  const titleElement = getByText(dummyProps.title)
  const typeElement = getByText(dummyProps.type)
  const locationElement = getByText(dummyProps.location)
  expect(element.length).toBeGreaterThan(0)
  expect(titleElement).toBeInTheDocument()
  expect(typeElement).toBeInTheDocument()
  expect(locationElement).toBeInTheDocument()
});