package com.amazonclone.mongospring.repositories;

import com.amazonclone.mongospring.model.PriceCard;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PriceCardRepository extends MongoRepository<PriceCard, String> {
}
