package com.amazonclone.data.mongospring.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.amazonclone.data.mongospring.model.PriceCard;

@RepositoryRestResource(collectionResourceRel = "priceCard", path = "PriceCard")
public interface PriceCardRepository extends MongoRepository<PriceCard, String> {
}
