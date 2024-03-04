package com.amazonclone.data.mongospring.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.amazonclone.data.mongospring.model.ImageBelt;

public interface ImageBeltRepository extends MongoRepository<ImageBelt, String> {
}
