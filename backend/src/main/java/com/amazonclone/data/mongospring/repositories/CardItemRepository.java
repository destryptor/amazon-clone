package com.amazonclone.data.mongospring.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.amazonclone.data.mongospring.model.CardItem;

public interface CardItemRepository extends MongoRepository<CardItem, String> {
}
