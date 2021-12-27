import React from 'react';
import { Col, Input, Row } from 'antd';
const { Search } = Input;

interface SearchBarProps {
    loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({loading,...props} ) => {
    return (
        <Row justify='center' style={{
            marginTop: '2rem',
        }}>
            <Col span={12}>
            <Search placeholder="Escriba el video que desea buscar" enterButton="Buscar" size="large" loading={loading} onSearch={() => console.log('clicked')} {...props}  />
            </Col>
        </Row>
    )
}