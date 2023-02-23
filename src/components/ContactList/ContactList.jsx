import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, BtnDelete, StyledList } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <StyledList>
        {contacts.map(contact => (
          <StyledItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <BtnDelete
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </BtnDelete>
          </StyledItem>
        ))}
      </StyledList>
    </div>
  );
};

ContactList.propTypes = {
  contatcs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
