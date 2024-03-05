package com.amazonclone.data.mongospring.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.amazonclone.data.mongospring.model.SingleCard;

public interface SingleCardRepository extends MongoRepository<SingleCard, String> {
}
