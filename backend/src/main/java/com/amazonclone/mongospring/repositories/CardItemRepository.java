package com.amazonclone.mongospring.repositories;

import com.amazonclone.mongospring.model.CardItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardItemRepository extends MongoRepository<CardItem, String> {
}

